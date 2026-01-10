import AnimatedCursorWrapper from "@/components/animations/animatedCursor";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import MainLayout from "./_mainLayout";
import { ModalProvider } from "@/hooks/providers/modalProvider";
// import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
// import { TanStackDevtools } from "@tanstack/react-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <ModalProvider>
        <MainLayout>
          <AnimatedCursorWrapper />
          <Outlet />
        </MainLayout>
        {/* <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      /> */}
      </ModalProvider>
    </>
  ),
});
