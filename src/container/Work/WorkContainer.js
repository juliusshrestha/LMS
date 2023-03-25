import React from 'react'
import SectionTitle from '../../components/SectionTitles/SectionTitle'
// import WorkData from '../../data/work/workDetails.json'
import WorkItemTwo from '../../components/Work/WorkItemTwo.jsx'
import usePagination from '../../utils/pagination'
import { getWorkData } from '../../axios/context/getWorkDetails'
import { useState, useEffect } from 'react'
import { Pagination } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(() => ({
	ul: {
		'& .MuiPaginationItem-page.Mui-selected': {
			backgroundColor: '#1292EE',
			color: '#FFFFFF',
			fontFamily: 'Muli',
		},
	},
}))

const WorkContainer = () => {
	const { t } = useTranslation()

	const classes = useStyles()
	const [workData, setWorkData] = useState([])
	let [page, setPage] = useState(1)
	let [counter, setCounter] = useState(null)
	const PER_PAGE = 6

	const count = Math.ceil(counter / PER_PAGE)
	const _DATA = usePagination(workData, PER_PAGE)

	const handleChange = (e, p) => {
		setPage(p)
		_DATA.jump(p)
	}

	useEffect(() => {
		const getWork = async () => {
			await getWorkData(page)
				.then((data) => {
					// console.log("work data received ->", data);
					setCounter(data.count)
					setWorkData(data.data)
					// console.log("Type of data", typeof workData);
				})
				.catch((error) => {
					// console.log("error ->", error);
					return error
				})
		}

		getWork()
		window.scrollTo(0, 0)
	}, [page])

	//   console.log(workData);
	// console.log("page", page);

	const renderWorkList = () => {
		return (
			<React.Fragment>
				<div className='section section-padding-t90-b100'>
					<div className='container'>
						<SectionTitle
							headingOption='title fz-32'
							title={t('portfolio.p1')}
						/>
						<div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 mb-n6'>
							{_DATA.currentData() &&
								workData.map((single, key) => {
									return (
										<div
											key={key}
											className='col mb-6'
											data-aos='fade-up'
											data-aos-delay='300'
										>
											<WorkItemTwo
												classOption='box-border'
												data={single}
												key={key}
											/>
										</div>
									)
								})}
						</div>
					</div>
				</div>

				<div className='row mt-10'>
					<div className='col'>
						<Pagination
							count={count}
							page={page}
							variant='outlined'
							shape='rounded'
							size='large'
							onChange={handleChange}
							className={['pagination center']}
							classes={{ ul: classes.ul }}
						/>
					</div>
				</div>
			</React.Fragment>
		)
	}

	return (
		<div className='section section-padding fix'>
			<div className='container'>
				{workData.length > 0 ? renderWorkList() : 'We are working'}
			</div>
		</div>
	)
}

export default WorkContainer
