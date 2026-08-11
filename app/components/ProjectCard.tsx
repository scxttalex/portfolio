import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

type ProjectCardProps = {
  title: string;
  description: string;
  image: { src: string; alt: string };
  href?: string;
  wip?: boolean;
  priority?: boolean;
};

export default function ProjectCard({
  title,
  description,
  image,
  href,
  wip = false,
  priority = false,
}: ProjectCardProps) {
  const content = (
    <Card className="flex h-full flex-col gap-4 transition-colors hover:border-gray-400 dark:hover:border-gray-600">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
        />
        {wip && (
          <span className="absolute top-2 right-2 rounded-full bg-amber-100 dark:bg-amber-900 px-2.5 py-1 text-xs font-medium text-amber-800 dark:text-amber-200">
            Work in Progress
          </span>
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </Card>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
    >
      {content}
    </Link>
  );
}
