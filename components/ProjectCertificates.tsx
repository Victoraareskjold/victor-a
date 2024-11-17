import { Certificate } from "../types";
import Link from "next/link";
import Image from "next/image";

interface certificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: certificateCardProps) {
  return (
    <Link
      /* href={`/certificates/${certificate.id}`} */
      href={certificate.link}
      target="_blank"
      className="project-card hover:opacity-50"
    >
      <div className="flex flex-col gap-1">
        <h2
          className="font-medium dark:text-white"
          dangerouslySetInnerHTML={{ __html: certificate.title }}
        ></h2>
        <div className="flex-row flex gap-2">
          <p className="line-clamp-2 dark:text-[var(--color-lightWhite)] underline flex-row">
            {certificate.course}
          </p>
          <Image alt="Link" src="link.svg" width="10" height="10" />
        </div>
      </div>
    </Link>
  );
}