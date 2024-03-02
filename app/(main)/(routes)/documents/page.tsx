"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

// use convex/react to interact with the convex api
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create); // create a new document, we are now using api.documents because the api / folder in convex is called 'documents' you can rename it to whatsoever you want

  // We are going to use a handler function to create a new document, you can instead use the create function directly in your code with an onClick event but I prefer to use a handler function to keep my code clean
  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`),
    ); // create a new document with the title 'Untitled' and then redirect the user to the new document page

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New Note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        width={300}
        height={300}
        alt="Page is empty"
        className="invert dark:invert-0"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s NoteBird
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="w-4 h-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
