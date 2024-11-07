import { Button } from "../ui/button";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  img: string;
  techs: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  link,
  img,
  techs,
}) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg border-2 flex flex-col">
      <img
        src={img}
        alt={`Projet`}
        className="w-full h-60 object-cover hover:object-scale-up object-top "
      />
      <div className="p-4 flex flex-col flex-grow items-center">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-justify flex-grow">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 w-full justify-center mb-3">
          {techs.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary-foreground text-primary-background rounded-full text-xs"
            >
              <img
                src={`/assets/icon/${tech}.svg`}
                alt="Tech stack"
                className="w-8 h-8"
              />
            </span>
          ))}
        </div>
        {/* <Button variant="outline" className="mr-2">
          Demo
        </Button> */}
        <Button variant="default" className="w-fit">
          <a href={link}>Code</a>
        </Button>
      </div>
    </div>
  );
};

export default Project;
