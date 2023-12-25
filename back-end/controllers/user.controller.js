const User = require('../models/User')

// User Registration 


exports.registerUser = async (req, res) => {
    const { firstName, lastName, email, password, dateOfBirth, phoneNumber, address } = req.body;
    try {
        const existinguser = await User.findOne({ email });
        if (existinguser) {
            return res.status(400).json({ error: 'Email already registered.' })
        }
        const newUser = new User({
            firstName,
            lastName,
            email,
            password, // In a real-world scenario, you should hash the password here
            dateOfBirth,
            phoneNumber,
            address,
        });


        await newUser.save();
        res.status(201).json({ message: 'User registered successfully.' })
    } catch (error) {
        res.status(500).json({ error: 'Unable to register user.' })
    }

};

exports.signInUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        if (user.isAccountLocked) {
            return res.status(400).json({ error: 'User account is locked. Raise a ticket to unlock.' });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password.' });
        }

        // Successful login, redirect to the user dashboard
        res.status(200).json({ message: 'User logged in successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Unable to log in.' });
    }
};




exports.raiseTicket = async (req, res) => {
    const userId = req.params.id

    try {
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }
        if (user.isAccountLocked) {
            return res.status(400).json({ error: 'User account is already locked.' });
        }

        user.isAccountLocked = true;
        await user.save();
        res.status(200).json({ message: 'Ticket raised successfully to lock the user account.' });


    } catch (error) {
        res.status(500).json({ error: 'Unable to raise the ticket.' });
    }

    exports.userDashboard = async (req, res) => {
        // Here, you can render the user dashboard or return a JSON response based on your frontend architecture
        res.status(200).json({
            message: 'User dashboard operations',
            operations: [
                'Select items to the cart',
                'Delete items from the cart',
                'Update items quantity',
                'View items in the cart',
                'Checkout',
                'Order Status',
                'Edit Profile',
                'Funds',
                'Logout',
            ],
        });
    };

    // Implmentation of user Oprations  cart model baaki hai an all baakin hai
    







}