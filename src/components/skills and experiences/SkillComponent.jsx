function SkillComponent({ value }) {
  return (
    <div>
      <p className="sm:text-xl mb-1 text-lg text-gray-800">{value.skill}</p>
      <div className="w-full rounded-full h-2.5 bg-gray-950">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${value.percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillComponent;
