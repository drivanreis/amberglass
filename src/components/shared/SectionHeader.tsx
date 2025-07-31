interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
      <h2 
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      
      {subtitle && (
        <p 
          className={`text-lg ${
            light ? 'text-gray-200' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
      
      <div 
        className={`h-1 w-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded mt-4 ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};

export default SectionHeader;