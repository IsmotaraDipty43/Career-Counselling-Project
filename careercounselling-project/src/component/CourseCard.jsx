import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="border rounded-lg shadow-lg p-4 bg-white">
            <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover rounded-t-lg"
            />
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <p className="text-sm text-gray-600 mb-2">Duration: {course.duration}</p>
                <p className="text-sm text-gray-600 mb-2">Level: {course.level}</p>
                <div className="text-sm text-gray-600">
                    <p className="font-semibold">Related Topics:</p>
                    <ul className="list-disc list-inside">
                        {course.relatedTopics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;