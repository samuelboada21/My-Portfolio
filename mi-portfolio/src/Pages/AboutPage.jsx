import { useContext } from 'react'
import { AppContext } from '../components/context/AppProvider'
import Page from '../components/container/Page'
import AboutBody from "../components/pure/AboutBody";

export default function AboutPage() {
  const {change, open} = useContext(AppContext)
  return (
    <Page changeOpen={change} isOpen={open} componente={<AboutBody/>} msg={"About"}/>
  )
}
