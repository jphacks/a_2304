'use client'

import { useState } from 'react'
import styles from './@css/style.module.scss'
import SideBar from '@/components/SideBar'
import { AppBar, List, ListItemIcon, ListItemButton, Divider } from '@mui/material'
import { AutoAwesome, ConfirmationNumber } from '@mui/icons-material'
import TLIndulgence from './@components/TLIndulgence'
import TLTodo from './@components/TLTodo'

export default function Home() {
  const [timelineId, setTimelineId] = useState(0);

  return (
    <main>
      <SideBar />

      <div className='main'>
        <AppBar
          position='fixed'
          sx={{
            width: 'calc(100% - 80px)',
            backgroundColor: 'white',
          }}
          className={styles.appBar}
        >
          <List>
            <ListItemButton
              onClick={() => {setTimelineId(0)}}
            >
              <ListItemIcon>
                <AutoAwesome />
              </ListItemIcon>
            </ListItemButton>

            <Divider orientation='vertical' flexItem />

            <ListItemButton
              onClick={() => {setTimelineId(1)}}
            >
              <ListItemIcon>
                <ConfirmationNumber />
              </ListItemIcon>
            </ListItemButton>
          </List>
        </AppBar>

        {timelineId == 0 && <TLTodo />}
        {timelineId == 1 && <TLIndulgence />}
      </div>
    </main>
  )
}
