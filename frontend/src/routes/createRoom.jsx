import { createFileRoute, useNavigate } from '@tanstack/react-router'

const CreateRoom = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen bg-gradient-to-br from-sky-950 to-blue-900 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-white/10 p-16 rounded-3xl shadow-xl backdrop-blur-md border border-white/20">
        <div className="font-display mb-6">
          <span className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 drop-shadow-lg">
            FUNZO
          </span>
        </div>
        <div>
          <button
            type="button"
            className="font-bold py-2 px-4 rounded bg-accent"
            onClick={() => {
              navigate({ to: '/room' })
            }}
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/createRoom')({
  component: CreateRoom,
})
