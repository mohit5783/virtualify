import { SubMenuLinks } from "@/content/SubMenuLinks";

const Technologies = () => {
  return (
    <div>
      <h1 className="text-white text-xl md:text-2xl font-merriweather font-semibold ml-5">Technologies</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {SubMenuLinks[0].fullMenu
          .filter((item) => item.name === "Technologies")
          .map((TechListItem) =>
            TechListItem?.List?.map((tech) => (
              <div key={tech} className="flex items-center justify-center">
                {tech}
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default Technologies;
