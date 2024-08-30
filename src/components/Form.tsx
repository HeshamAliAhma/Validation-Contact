import { useState } from "react";
import Button from "./ui/Button";
import CheckboxC from "./ui/Cheakbox";
import Description from "./ui/Description";
import Input from "./ui/Input";
import { productValidation } from "./validation";

interface IProps {}

const DefaultContact = {
    firstName: '',
    lastName: '',
    Email: '',
    Description: '',
};

const Form = ({}: IProps) => {
    const [Contact, setContact] = useState(DefaultContact);
    const [errors, setErrors] = useState({ firstName: '', lastName: '', Email: '', Description: '' });

    const submitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const { firstName, lastName, Email, Description } = Contact;

        const validationErrors = productValidation({
            firstName,
            lastName,
            Email,
            Description,
        });

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted successfully:', Contact);
            setErrors({ firstName: '', lastName: '', Email: '', Description: '' });
        } else {
            console.log('Validation errors:', validationErrors);
            setErrors({
                firstName: validationErrors.firstName || '',
                lastName: validationErrors.lastName || '',
                Email: validationErrors.Email || '',
                Description: validationErrors.Description || '',

            });
        }
    };

    return (
        <section className="bg-slate-200 flex items-center justify-center h-[100vh]">
            <main className="flex items-center justify-center bg-white px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 border w-fit">
                <div className="max-w-xl lg:max-w-3xl">
                    <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Contact Us</h1>

                    <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                        <Input
                            htmlFor="FirstName"
                            label="First Name"
                            name="first_name"
                            type="text"
                            classMobile={"sm:col-span-3"}
                            value={Contact.firstName}
                            onChange={(e) => setContact({ ...Contact, firstName: e.target.value })}
                            error={errors.firstName}
                        />
                        <Input 
                            htmlFor="LastName"
                            label="Last Name"
                            name="last_name"
                            type="text"
                            classMobile={"sm:col-span-3"}
                            value={Contact.lastName}
                            onChange={(e) => setContact({ ...Contact, lastName: e.target.value })}
                            error={errors.lastName}
                        />
                        <Input
                            htmlFor="Email"
                            label="Email"
                            name="email"
                            type="email"
                            value={Contact.Email}
                            onChange={(e) => setContact({ ...Contact, Email: e.target.value })}
                            error={errors.Email}
                        />
                        <Description
                            value={Contact.Description}
                            onChange={(e) => setContact({ ...Contact, Description: e.target.value })}
                            error={errors.Description}
                        />

                        <div className="col-span-6">
                            <label htmlFor="MarketingAccept" className="flex gap-4">
                                <CheckboxC />
                                <span className="text-sm text-gray-700">
                                    I consent to being contacted by the team *
                                </span>
                            </label>
                        </div>

                        <div className="col-span-full sm:flex sm:items-center sm:gap-4">
                            <Button text="Submit" onClick={submitHandler} />
                        </div>
                    </form>
                </div>
            </main>
        </section>
    )
}

export default Form;
