import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true, // Consider adding `required: true` to enforce relationship integrity
    },
    title: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 6, // Fixed typo from `minLengrh` to `minLength`
    },
    content: {
        type: String,
        required: true,
        maxLength: 2000,
        minLength: 50, // Fixed typo from `minLengrh` to `minLength`
    },
    image: {
        type: String,
        default: '', // Optional: Provide a default value if the image field is not required
    },
    category: {
        type: String,
    },
    tags: {
        type: [String],
        default: [], // Optional: Provide a default empty array for tags
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    claps: {
        type: Number,
        default: 0,
    },
    comments: [
        {
            userId: {
                type: mongoose.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            content: {
                type: String,
                required: true,
                maxLength: 200,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
