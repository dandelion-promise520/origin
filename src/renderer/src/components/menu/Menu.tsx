import { TabNav } from '@radix-ui/themes'
import { NavLink } from 'react-router'

const Menu = (): React.JSX.Element => {
  return (
    <div className="flex flex-col justify-between items-center h-full drag">
      <section className="no-drag">
        <TabNav.Root className="flex flex-col items-center gap-8" color="gray">
          <TabNav.Link asChild>
            <NavLink to="/">
              <span className="icon-[fa7-solid--home] size-8 text-black" />
            </NavLink>
          </TabNav.Link>
          <TabNav.Link asChild>
            <NavLink to="schedule">
              <span className="icon-[mingcute--schedule-fill] size-10 text-gray" />
            </NavLink>
          </TabNav.Link>
          <TabNav.Link asChild>
            <NavLink to="members">
              <span className="icon-[tdesign--member-filled] size-8 text-gray" />
            </NavLink>
          </TabNav.Link>
          <TabNav.Link asChild>
            <NavLink to="dashboard">
              <span className="icon-[streamline-ultimate--presentation-board-graph-bold] size-8 text-gray" />
            </NavLink>
          </TabNav.Link>
        </TabNav.Root>
      </section>

      <section style={{ writingMode: 'vertical-rl' }} className="text-xl font-bold ">
        rentabel
      </section>

      <section className="icon-[tabler--message] size-10 no-drag cursor-pointer" />
    </div>
  )
}

export default Menu
