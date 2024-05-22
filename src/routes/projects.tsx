import RecentProjects from "~/partials/Projects/RecentProjects";

export default function Projects() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4 max-w-screen-2xl">
      <RecentProjects type="all" />
    </main>
  );
}
