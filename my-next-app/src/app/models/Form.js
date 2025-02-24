import mongoose from "mongoose";

const FormSchema = new mongoose.Schema
          ({
                    name: String,
                    email: String,
                    message: String,
          }, { timestamps: true });
const Form = mongoose.model.Form || mongoose.model("Form", FormSchema);
export default Form;