import { useEffect, useState } from "react"

function TabContent({tabNumber}) {
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
          [<div>상세정보</div>, <div>리뷰</div>, <div>교환 및 문의사항</div>] [tabNumber]
        }
      </div>
        
    </>
  )
}

export default TabContent