import "./watch.css";
import React from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlinedIcon/>
            Home
        </div>
        <video className="videowatch" src="https://rr1---sn-vgqsknsk.googlevideo.com/videoplayback?expire=1722916991&ei=H0yxZp3LCd-Y2_gPm9LoyQU&ip=45.203.246.55&id=o-APuBT8lhd8_TOLuZAmiHMyheakcUOsNA3brH0emd7QBM&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&gcr=us&bui=AXc671LG-2SsJ8yuKhVEUDTXmNeo2dwTcmd5uvjf5SIYlulmWMOu2sQ1YUaiyqJpcGbJyNxNEjj8O36J&spc=NO7bAYbraiYy66wlzOuMADxoiO5JnOuCKjc2_p36rAFBitnmdWvikgqy6j1aEVc&vprv=1&svpuc=1&mime=video%2Fmp4&ns=lvSG9VODCXlOEgPh-a4Kxw0Q&rqh=1&gir=yes&clen=8667969&ratebypass=yes&dur=126.571&lmt=1711288899151647&c=WEB&sefc=1&txp=6309224&n=sFwRxZLybLjjJg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cgcr%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRAIgXGRB2aUmvoC77jFiMvFReR-at7ccV6bLVdHiIHsSQikCIBF9vvLvuXCjNu8SftM0hvYdDG764K1GwTP6-TXhREJq&title=My+Hero+Academia+-+Opening+1+%7C+4K+%7C+60FPS+%7C+Creditless+%7C&redirect_counter=1&cm2rm=sn-p5qel77z&rrc=80&fexp=24350516,24350518,24350557&req_id=1797dd9bd06a3ee&cms_redirect=yes&cmsv=e&mh=Lu&mip=2603:6011:2ff0:97c0:c116:1202:e9fa:2b99&mm=34&mn=sn-vgqsknsk&ms=ltu&mt=1722895042&mv=m&mvi=1&pl=28&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AGtxev0wRQIhAJlywa669oUAC0p0dm8vy1bU47SpGLt80wVvuFeK83GAAiA98DTkDavLidAuTMkvppuGy3HLONscoj9mgA21fWgurQ%3D%3D" autoPlay progress controls/>
    </div>
  )
}
