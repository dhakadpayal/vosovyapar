import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import Grid from './Grid/Grid';
import Slider from './Slider/Slider';
import Cerousol from './Cerousol/Cerousol';


import Card from './Card/Card';
import Footer from './Footer/Footer';

export default function Home() {
  return (
    <>
    <Header/>
    <Main/>
    <Grid/>
    <Slider/>
    <Cerousol/>
    <Card/>
    <Footer/>
   
    </>
  )
}
