import uniqid from "uniqid";

const Data = {
    'Personal Information': {
        'Job Title': '',
        Photo: '',
        'First Name': '',
        'Last Name': '',
        Country: '',
        City: '',
        Email: '',
        Phone: '',
        Description: '',
    },
    'Employment History': [
        {
            id: uniqid(),
            'Job Title': '',
            Employer: '',
            'Start Date': '',
            'End Date': '',
            City: '',
            Description: '',
        },
    ],
    Education: [
        {
            id: uniqid(),
            School: '',
            Degree: '',
            'Start Date': '',
            'End Date': '',
            City: '',
            Description: '',
        },
    ],
};

export default Data;