import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/our-team')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/team"!</div>
}
