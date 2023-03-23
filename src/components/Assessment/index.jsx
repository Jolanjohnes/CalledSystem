import { Emotion } from './styles'
import {
  MdOutlineSentimentDissatisfied,
  MdSentimentNeutral,
  MdOutlineSentimentSatisfied,
  MdOutlineSentimentVerySatisfied
} from 'react-icons/md'
export function Assessment({ avaliation }) {
  const emotions = [
    {
      code: 0,
      icon: <MdOutlineSentimentDissatisfied />,
      description: 'Insatisfeito'
    },
    {
      code: 1,
      icon: <MdSentimentNeutral />,
      description: 'Neutro'
    },
    {
      code: 2,
      icon: <MdOutlineSentimentSatisfied />,
      description: 'Satisfeito'
    },
    {
      code: 3,
      icon: <MdOutlineSentimentVerySatisfied />,
      description: 'Muito Satisfeito'
    }
  ]

  function getEmotion() {
    const index = emotions.findIndex(item => {
      return item.code == avaliation
    })

    return (
      <div>
        {emotions[index].icon}
        <p>{emotions[index].description}</p>
      </div>
    )
  }

  return (
    <Emotion>
      {avaliation ? (
        <>{getEmotion()}</>
      ) : (
        emotions.map(item => {
          return (
            <div>
              {item.icon}
              <p>{item.description}</p>
            </div>
          )
        })
      )}
    </Emotion>
  )
}
