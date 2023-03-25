// import PropTypes from 'prop-types'
// import React from 'react'

// const SingleTeam = ({ data }) => {
// 	// console.log("team", data)
// 	return (
// 		<div className='static-team'>
// 			<div className='thumb'>
// 				<div className='team-image'>
// 					<img
// 						src={process.env.PUBLIC_URL + data.team_image}
// 						alt='team Images'
// 					/>
// 				</div>
// 				<div className='overlay'></div>
// 				<ul className='social-icon text-center'>
// 					<li className='facebook'>
// 						<a
// 							target='_blank'
// 							rel='noopener noreferrer'
// 							href={data.social_media.linkedin}
// 							className='link'
// 						>
// 							<i className='fab fa-linkedin'></i>
// 						</a>
// 					</li>
// 					<li className='twitter'>
// 						<a
// 							target='_blank'
// 							rel='noopener noreferrer'
// 							href={data.social_media.twitter}
// 							className='link'
// 							aria-label='Twitter'
// 						>
// 							<i className='fab fa-twitter'></i>
// 						</a>
// 					</li>
// 					<li className='instagram'>
// 						<a
// 							target='_blank'
// 							rel='noopener noreferrer'
// 							href={data.social_media.instagram}
// 							className='link'
// 							aria-label='Instagram'
// 						>
// 							<i className='fab fa-instagram'></i>
// 						</a>
// 					</li>
// 				</ul>
// 			</div>
// 			<div
// 				className='team-content'
// 				dangerouslySetInnerHTML={{ __html: data['quotes'] }}
// 			></div>
// 			<div className='author-info'>
// 				<div className='cite'>
// 					<h6 className='name'>{data.name}</h6>
// 					<span className='position'>{data.designation}</span>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// SingleTeam.propTypes = {
// 	data: PropTypes.object,
// }

// export default SingleTeam
