import { useDeleteProjectModal } from "components/app/modals/delete-project-modal";

export default function DeleteProject() {
  const { setShowDeleteProjectModal, DeleteProjectModal } =
    useDeleteProjectModal();
  return (
    <div className="rounded-lg border border-gray-200 bg-white">
      <DeleteProjectModal />
      <div className="flex flex-col space-y-3 p-10">
        <h2 className="text-xl font-medium">Delete Project</h2>
        <p className="text-sm text-gray-500">
          Permanently delete your project, custom domain, and all associated
          links + their stats. This action cannot be undone - please proceed
          with caution.
        </p>
      </div>
      <div className="border-b border-gray-200" />

      <div className="flex items-center justify-end px-10 py-4">
        <button
          onClick={() => setShowDeleteProjectModal(true)}
          className="h-9 w-32 rounded-md border border-red-500 bg-red-500 text-sm text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-red-500 focus:outline-none"
        >
          Delete Project
        </button>
      </div>
    </div>
  );
}
