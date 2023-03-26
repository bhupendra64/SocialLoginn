import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Col, Container, Navbar, Row, Text, User } from "@nextui-org/react"
import { getUserData } from "../services/services"
import LogOutIcon from "../icons/Logout"



interface UserdataGoogle {
 name: string
 picture: string
 email: string
}

const Login = () => {
 const [userDataGoogle, setUserDataGoogle] = useState<null | UserdataGoogle>(null)

 const loginWith = useRef(localStorage.getItem("loginWith"))

 const navigate = useNavigate()

 

 useEffect(() => {
  const accessToken = localStorage.getItem("accessToken")

  if (accessToken && loginWith.current === "Google") {
    getUserData(accessToken).then((resp:any)=> {
    setUserDataGoogle(resp)
    console.log(resp);
    
   })
  }
 }, [loginWith])

 const setLogOut = () => {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("loginWith")
  navigate("/")
 }

 if (!userDataGoogle) return null

 return (
  <>
   <Navbar isBordered variant='sticky'>
    <Navbar.Brand>
     
    </Navbar.Brand>
    <Navbar.Content>
     <Navbar.Item>
      <Button
       auto
       flat
       size='sm'
       icon={<LogOutIcon fill='currentColor' />}
       color='primary'
       onClick={() => setLogOut()}
      >
       Log out
      </Button>
     </Navbar.Item>
    </Navbar.Content>
   </Navbar>
   <Container gap={0}>
    <Row gap={1}>
     <Col>
      <Text h2>Login with {loginWith.current}</Text>
      <img src={userDataGoogle?.picture} alt="" />
      <Text h2>{userDataGoogle && userDataGoogle?.name}</Text>
      <Text h2>{userDataGoogle && userDataGoogle?.email}</Text>
     </Col>
    </Row>
   </Container>
  </>
 )
}

export default Login