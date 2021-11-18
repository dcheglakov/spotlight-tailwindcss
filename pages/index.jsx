import Head from "next/head";
import Colors from "@/components/Colors";
import Button from "@/components/Button";
import UploadButton from "@/components/UploadButton";
import Section from "@/components/Section";
import Dialog from "@/components/Dialog";

export default function Home() {
  return (
    <div className="bg-purple-extra-light p-8 min-h-screen">
      <Head>
        <title>Spotlight Tailwind CSS Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="space-y-4">
        <h1 className="text-4xl font-bold">Design System Example</h1>
        <Colors />
        <Section title="Buttons">
          <div className="flex gap-2">
            <Button isPrimary>OK</Button>
            <Button>Cancel</Button>
            <Button isDisabled>Cancel</Button>
            <UploadButton />
          </div>
        </Section>
        <Section title="Dialogs">
          <Dialog>
            Are you sure you want to remove this image from your uploads
            gallery?
          </Dialog>
        </Section>
      </main>
    </div>
  );
}
