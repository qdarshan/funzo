import { createFileRoute } from '@tanstack/react-router'
import { Question } from '../components/Question'

export const Route = createFileRoute('/question')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Question/>
}
