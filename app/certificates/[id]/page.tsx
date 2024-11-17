import { getCertificates } from "../../utils/firebaseFunctions";
import { Certificate } from "../../../types";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function certificatePage({ params }: Props) {
  const { id } = params;

  const certificates = await getCertificates();
  const certificate = certificates.find((cert) => cert.id === id) || null;

  if (!certificate) {
    notFound();
  }

  return (
    <main>
      <h1 dangerouslySetInnerHTML={{ __html: certificate.title }} />
      <div dangerouslySetInnerHTML={{ __html: certificate.course }} />
    </main>
  );
}
