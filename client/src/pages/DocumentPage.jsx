import { useAuth } from "../context/AuthContext"


function DocumentPage() {

  const { user } = useAuth();
  console.log(user)
  return (
    <div>DocumentPage</div>
  )
}

export default DocumentPage