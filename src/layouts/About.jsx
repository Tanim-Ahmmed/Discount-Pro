const About = () => {
    return (
        <div className="bg-gray-100 text-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
            <h1 className="text-4xl font-bold text-center mb-6">About Developer</h1>
            <p className="text-lg leading-relaxed">
                Hello! Myself <span className="text-[#124e66] font-bold">Tanim Ahmmed</span>. I'm a passionate developer with a keen interest in creating dynamic and user-friendly web applications. 
                With a strong foundation in modern technologies like React and Firebase, I enjoy turning ideas into reality, 
                delivering seamless user experiences, and constantly learning new tools and techniques to improve my craft.
            </p>
            <p className="text-lg leading-relaxed mt-4">
                Beyond coding, I find joy in exploring creative hobbies, connecting with like-minded individuals, and staying 
                updated with the latest industry trends. I believe in the power of technology to make a positive impact, and I 
                strive to contribute to projects that bring value to people's lives.
            </p>
            <div className="mt-6 text-center">
                <a
                    href="#"
                    className="inline-block bg-[#124e66] text-white px-6 py-2 rounded-full text-lg font-semibold shadow hover:bg-[#124e66] transition">
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default About;
