import User from "../model/User.js";

export const addUser = async (request, response) => {
    try {
        console.log('Request body:', request.body);  // Log the incoming request

        // Check if the user already exists based on the username
        let exist = await User.findOne({ username: request.body.username });

        if (exist) {
            return response.status(200).json({ message: 'User already exists' });
        }

        // Create a new user
        const newUser = new User(request.body);
        await newUser.save();

        return response.status(201).json({ message: 'User created successfully', newUser });
    } catch (error) {
        console.error('Error during user creation:', error.message);
        return response.status(500).json({ message: 'Error creating user', error: error.message });
    }
};