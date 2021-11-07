import React, { FC } from 'react'
import { useGlobalStates, modifyGlobalStates } from '@/store/global-states'
import { GlobalStatesModificationType } from '@/store/global-states.type'

const Count: FC = () => {
  const { count } = useGlobalStates()
  return (
    <div>
      <p>count:{count}</p>
      <button
        onClick={() =>
          modifyGlobalStates(
            GlobalStatesModificationType.MODIFY_COUNT,
            count + 1
          )
        }
      >
        +1
      </button>
    </div>
  )
}

export default Count
