export default function CategoryForm() {
    return (
        <div>
            <h1> หมวดหมู่สินค้า </h1>
            <form>
                <input type="text" name="name" />   <br/>
                <textarea name="description" placeholder="กรอกรายละเอียด"></textarea>
                <button>บันทึกข้อมูล</button>
            </form>
        </div>
    );
}