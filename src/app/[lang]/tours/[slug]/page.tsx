import { getDictionary, Locale } from '@/get-dictionary';

export default async function Tour({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const t = dict.Contact;

  return (
    <div className="flex flex-col gap-16 px-8 md:px-16 py-16">
      <h1 className="text-4xl">Tour</h1>
      <div className="flex flex-col gap-8">
        <p>This is the tour page.</p>
      </div>
    </div>
  )
}
