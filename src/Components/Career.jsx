import CareerCard from './CareerCard';
import { Download } from 'react-feather';

const Career = ({ CV, Wikrama, Dihostingin, theme }) => {
  return (
    <section className="career">
      <div
        className="w-full"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className={`text-3xl md:text-4xl font-medium ${theme === 'Day' ? 'text-gray-600' : 'text-white'}`}>
            Career
          </h3>
          <div className="mt-4">
            <a
              href={CV}
              download
              className="flex items-center gap-2 border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 rounded-full px-5 py-2 text-sm font-medium w-fit"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CareerCard
            logo={Wikrama}
            title="SMK Wikrama Bogor"
            role="Back-End Developer | Game Developer | Web Developer"
            location="Bogor, Indonesia"
            duration="June 2022 - 2025"
            theme={theme}
          />
          <CareerCard
            logo={Dihostingin}
            title="PT Industri Kreatif Digital"
            role="Full-Stack Developer | Front-End Developer"
            location="Bogor, Indonesia"
            duration="Jan 2024 - June 2024"
            theme={theme}
          />
        </div>
      </div>
    </section>
  );
};

export default Career;
