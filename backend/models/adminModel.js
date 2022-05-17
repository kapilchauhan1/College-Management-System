import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      //required: true,
    },
    email: {
      type: String,
      required: true,
      //default:'admin1@example.com',
    },
    image: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      //default:123456,
    },
    isAdmin: {
      type: Boolean,
     // required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)
adminSchema.methods.matchPassword = async function (enteredPassword) {
  console.log('reached here')
  return await bcrypt.compare(enteredPassword, this.password)
}
const Admin = mongoose.model('Admin', adminSchema)
var admin1 = new Admin({ name: 'Kapil', email:'admin1@example.com', password:'123456',isAdmin:true });
admin1.save(function (err, book) {
  if (err) return console.error(err);
  console.log(book.name + " saved to bookstore collection.");
});
export default Admin
