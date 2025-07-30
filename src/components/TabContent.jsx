import { useEffect, useState } from "react"

function TabContent({tabNumber, info}) {
  const [fade, setFade] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade('end');
    }, 10)
    return () => {
      clearTimeout(timer)
      setFade('');
    }
  }, [tabNumber])

  return (
    <>
      <div className={`start ${fade}`}>
        {
          [<div style={{height: '800px', textAlign: 'center'}}>{info}</div>, <div style={{height: '800px', textAlign: 'center'}}>리뷰</div>, <div style={{height: '800px', textAlign: 'center'}}>교환 및 문의사항</div>] [tabNumber]
        }
      </div>
        
    </>
  )
}

export default TabContent