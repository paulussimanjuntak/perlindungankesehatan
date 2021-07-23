import { memo } from 'react'
import { Image } from 'antd'
import { Card } from 'react-bootstrap'
import { useRouter } from 'next/router'

const CardBanner = ({ image, link }) =>  {
  const router = useRouter()

  return (
    <>
      <Card 
        onClick={() => router.push(link)}
        className="border-0 shadow bg-transparent bor-rad-10px hover-pointer"
      >
        <Image
          src={image}
          preview={false}
          className="mx-auto d-block img-fit w-100 bor-rad-10px"
          alt={process.env.NEXT_PUBLIC_APP_NAME}
        />
      </Card>
    </>
  )
}

export default memo(CardBanner)
