import LeftPanel from "@components/left-panel/LeftPanel"
import NavigationPanel from "@components/navigation-panel/NavigationPanel"
import RightPanel from "@components/right-panel/RightPanel"
import FloatingElements from "@components/FloatingElements"
import { Outlet } from "react-router-dom"
import PostContainer from "../features/feed/components/post-section/PostContainer"
import { useFloatingElementContext } from "@contexts/FloatingElementsContext"
import NavigationPanelProvider from "@contexts/NavigationPanelContext"
import { useGlobalLayoutContext } from "@contexts/GlobalLayoutContext"
import Backdrop from "@components/Backdrop"
import LeftPanelProvider from "@contexts/LeftPanelContext"
import RightPanelProvider from "@contexts/RightPanelContext"
import TopbarProvider, { useTopbarContext } from "@contexts/TopbarContext"
import PrimaryTopbarProvider, { usePrimaryTopbarContext } from "@contexts/PrimaryTopbarContext"


function MainContainer({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <div className="main-container
            relative
            bg-(--leftpanel-maincontainer-clr)
            h-screen w-full min-h-0 overflow-hidden
            grid grid-cols-1
            xl:grid-cols-[1.2fr_6fr] xl:grid-rows-[auto_1fr]
            desktop:grid-cols-[0.9fr_5fr]
        ">
            { children }
        </div>
    )
}

function UILayer({ children }: { children: React.ReactNode | React.ReactNode[] }) {
	return (
		<div className='root-ui'>
			{children}
		</div>
	)
}

function PrimaryMiddleSection({ children }: { children: React.ReactNode | React.ReactNode[] }) {
	return (
		<div className="primary-middle-section
			bg-(--primary-secondary-rightpanel-clr)
			h-full w-full
			grid grid-cols-1
			xl:h-[98.5%] xl:w-[99.5%] xl:self-end xl:grid-cols-[5fr_1.8fr] xl:grid-rows-[auto_1fr] xl:rounded-[50px_0_0_0]
		">
			{children}
		</div>
	)
}
function TopbarSection() {
	const { topbarElements: [topbarElements] } = useTopbarContext()!

	return (
		<div className="top-bar min-w-0 w-full h-full flex items-center">
			{ topbarElements.elements || <></> }
		</div>
	)
}
function PrimaryTopbar() {
	const { primaryTopbar: [primaryTopbar] } = usePrimaryTopbarContext()!

	return (
		<div className="flex min-h-0 h-auto w-full xl:col-span-2">
			{ primaryTopbar.elements || <></>}
		</div>
	)
}
function HolderMiddleSection({ children }: { children: React.ReactNode | React.ReactNode[] }) {
	return (
		<div className="holder-middle-section
			flex flex-col items-center justify-self-center w-full
			xl:w-[65%]
		">
			{children}
		</div>
	)
}
function SecondaryMiddleSection({ children }: { children: React.ReactNode | React.ReactNode[] }) {
	return (
		<div className="secondary-middle-section left-panel
			w-[95%] h-[90vh] overflow-y-scroll
			flex flex-col items-center justify-self-end
			sm:w-[60%]
			md:w-[60%]
			lg:w-[50%]
			xl:w-full
		">
			{children}
		</div>
	)
}

export default function MainLayout() {
	const { sideBar: [openSidebar, setOpenSidebar] } = useGlobalLayoutContext()!

	const FloatingElementsData = useFloatingElementContext()!
	const {
		floatingOverlay: [openFloatingElement],
		overlayElements: {
			postContainer: [openPostContainer, setOpenPostContainer]
		}
	} = FloatingElementsData


	return (
		<UILayer>
			<MainContainer>
				<LeftPanelProvider>
					<LeftPanel open={openSidebar} />
					{openSidebar && <Backdrop zIndex={30} onClick={() => setOpenSidebar(false)} /> }

					<TopbarProvider>
						<TopbarSection />

						<PrimaryMiddleSection>
							<PrimaryTopbarProvider>
								<PrimaryTopbar />

								<RightPanelProvider>
									<NavigationPanelProvider>
										<HolderMiddleSection>
											<NavigationPanel />

											<SecondaryMiddleSection>
												<Outlet />
											</SecondaryMiddleSection>
										</HolderMiddleSection>
									</NavigationPanelProvider>

									<RightPanel />
								</RightPanelProvider>
							</PrimaryTopbarProvider>
						</PrimaryMiddleSection>
					</TopbarProvider>
				</LeftPanelProvider>
			</MainContainer>

			{ openFloatingElement &&
				<FloatingElements>
					{ openPostContainer && <PostContainer setOpen={setOpenPostContainer} /> }
				</FloatingElements>
			}
		</UILayer>
	);
}
