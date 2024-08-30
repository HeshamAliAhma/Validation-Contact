interface IContact {
    firstName: string;
    lastName: string;
    Email: string;
    Description: string;
}

interface IContactError {
    firstName?: string;
    lastName?: string;
    Email?: string;
    Description?: string;
}


export const productValidation = (Contact: IContact): IContactError => {
    const errors: IContactError = {};

    const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(Contact.Email)
    
    // التحقق من firstName
    if (!Contact.firstName.trim() || Contact.firstName.length < 3 || Contact.firstName.length > 80) {
        errors.firstName = 'Contact firstName must be between 3 and 80 characters';
    }

    // التحقق من lastName
    if (!Contact.lastName.trim() || Contact.lastName.length < 5 || Contact.lastName.length > 80) {
        errors.lastName = 'Contact lastName must be between 3 and 80 characters';
    }

    // التحقق من Email
    if (!Contact.Email.trim() || !emailValidation) {
        errors.Email = 'Invalid email address';
    }

    // التحقق من Description
    if (!Contact.Description.trim() || Contact.Description.length < 10 || Contact.Description.length > 900) {
        errors.Description = 'Contact Description must be between 10 and 900 characters';
    }

    return errors;
};


// interface IContactError {
//     firstName?: string;
//     lastName?: string;
//     Email?: string;
//     Description?: string;
// }

// const [errors, setErrors] = useState<IContactError>({
//     firstName: '',
//     lastName: '',
//     Email: '',
//     Description: '',
// });
