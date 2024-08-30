import { ChangeEvent, useState } from "react";
import Button from "./ui/Button";
import CheckboxC from "./ui/Cheakbox";
import Description from "./ui/Description";
import Input from "./ui/Input";
import { productValidation } from "./validation";
import toast, { Toaster } from 'react-hot-toast';

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

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContact({
            ...Contact,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate the form data
        const validationErrors = productValidation(Contact);
        setErrors({
            firstName: validationErrors.firstName || '',
            lastName: validationErrors.lastName || '',
            Email: validationErrors.Email || '',
            Description: validationErrors.Description || '',
        });

        // Check if there are any errors
        if (Object.keys(validationErrors).length === 0) {
            // No errors, proceed with form submission

            // Here, you can submit the form using the Fetch API (if needed)
            fetch('https://formspree.io/f/mvgplldw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Contact),
            })
            .then((response) => {
                if (response.ok) {
                    console.log('Form submitted successfully');
                    // Optionally, you can clear the form here
                    setContact(DefaultContact);
                    setErrors(DefaultContact); // Clear errors
                    toast('Your Message is Send Successfully',{
                        style: {
                            color:'white',
                            background:'#22c55e',
                            fontWeight:'bold'
                        },
                        icon: '👏',
                    });
                } else {
                    console.error('Form submission failed');
                }
            })
            .catch((error) => {
                console.error('Error during form submission:', error);
            });
        } else {
            // Handle errors
            console.log('Validation errors:', validationErrors);
        }
    };

    return (
        <section className="bg-slate-200 flex items-center justify-center h-[100vh]">
            <main className="flex items-center justify-center bg-white px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 border w-fit">
                <div className="max-w-xl lg:max-w-3xl">
                    <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">Contact Us</h1>

                    <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit}>
                        <Input
                            htmlFor="FirstName"
                            label="First Name"
                            name="firstName"  // Fixed the name attribute
                            type="text"
                            classMobile={"sm:col-span-3"}
                            value={Contact.firstName}
                            onChange={handleChange}
                            error={errors.firstName}
                        />
                        <Input 
                            htmlFor="LastName"
                            label="Last Name"
                            name="lastName"  // Fixed the name attribute
                            type="text"
                            classMobile={"sm:col-span-3"}
                            value={Contact.lastName}
                            onChange={handleChange}
                            error={errors.lastName}
                        />
                        <Input
                            htmlFor="Email"
                            label="Email"
                            name="Email"  // Fixed the name attribute
                            type="email"
                            value={Contact.Email}
                            onChange={handleChange}
                            error={errors.Email}
                        />
                        <Description
                            name="Description"  // Fixed the name attribute
                            value={Contact.Description}
                            onChange={handleChange}
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
                            <Button text="Submit" />
                        </div>
                    </form>
                </div>
            </main>
            <Toaster />
        </section>
    )
}

export default Form;
