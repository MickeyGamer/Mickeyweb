import mongoose, { Model, Schema, Types } from "mongoose";

export interface IProduct {
  name: string;
  slug: string; //id
  description: string;
  price: number;
  stock: number;
  category: Types.ObjectId;
  imageUrl: string;
  imagePublicId: string;
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "กรุณากรอกชื่อสินค้า"],
      trim: true,
    },

    slug: {
      type: String,
      required: [true, "กรุณากรอก slug"],
      trim: true,
      lowercase: true,
      unique: true,
    },

    description: {
      type: String,
      required: [true, "กรุณากรอกรายละเอียดสินค้า"],
      trim: true,
    },

    price: {
      type: Number,
      required: [true, "กรุณากรอกราคา"],
      min: [0, "ราคาต้องไม่น้อยกว่า 0"], //ตํ่าสุด 0
    },

    stock: {
      type: Number,
      required: true,
      min: [0, "จำนวนสินค้าต้องไม่น้อยกว่า 0"],
      default: 0, //เริ่มต้น ที่ 0
    },

    category: {
      type: Schema.Types.ObjectId, //ดึงมาจาก Category
      ref: "Category",
      required: [true, "กรุณาเลือกหมวดหมู่"],
    },

    imageUrl: {
      type: String,
      required: [true, "กรุณาอัปโหลดรูปสินค้า"],
    },

    imagePublicId: {
      type: String,
      required: true,
    },

    published: {
      type: Boolean, //Boolean จริง กับเท็จ 0/1
      default: true, //ค่าเริ่มต้น เป็น จริง
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({
  name: "text",
  description: "text",
});

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;