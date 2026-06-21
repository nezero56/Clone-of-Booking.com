const techSkills = [
  { name: 'React.js', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'JavaScript', level: 88 },
  { name: 'Node.js', level: 70 },
  { name: 'PostgreSQL', level: 65 },
  { name: 'Git & GitHub', level: 80 },
];

const timeline = [
  { year: '2024', event: 'Joined SheCanCODE Bootcamp at Igire Rwanda Organization' },
  { year: '2023', event: 'Built first full-stack web application' },
  { year: '2022', event: 'Started learning JavaScript & React' },
  { year: '2021', event: 'Discovered the world of web development' },
];

function SkillBar({ name, level }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-blue-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Me</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Passionate developer, lifelong learner, and community builder.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Am I?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I am a web developer based in Kigali, Rwanda, participating in the
                SheCanCODE Bootcamp at Igire Rwanda Organization. I am passionate about
                building web experiences that are fast, beautiful, and accessible to everyone.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Outside of code, I enjoy mentoring fellow learners, contributing to
                open-source projects, and exploring the intersection of technology and
                community development in East Africa.
              </p>
              <div className="flex gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Projects Built</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">2+</div>
                  <div className="text-sm text-gray-600">Years Learning</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Commitment</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1200&h=900&fit=crop"
                  alt="Development team collaborating"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-xl p-4 shadow-lg">
                <div className="text-xl font-bold">SheCanCODE</div>
                <div className="text-blue-200 text-sm">Bootcamp 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Technical Skills</h2>
          {techSkills.map(skill => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">My Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200" />
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 z-10">
                  {item.year}
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex-1 shadow-sm">
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
