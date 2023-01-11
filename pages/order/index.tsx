import { Fragment, useState, useCallback, useEffect } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import useBreakpoint from '@utils/use-breakpoint'
import { sortOptions, subCategories, products, filterOptions } from '@data/order'
import ProductFiltersMobile from '@products/ProductFiltersMobile'
import ProductGrid from '@products/ProductGrid'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

function AllProductsPage() {
	const router = useRouter()

	console.log(router.query)
	const { breakpoint, windowSize } = useBreakpoint()

	const handleCheckbox = e => {
		setFilters(prevState => {
			return {
				categories: {
					...prevState.categories,
					[e.target.value]: {
						...prevState.categories[e.target.value],
						checked: e.target.checked
					}
				}
			}
		})
		console.log(filters)
		// Find all categories where checked = true, then set filters to those categories.
		for (let f in filters.categories) {
			if (!filters.categories[e.target.value]['checked'] === true) {
				setFiltered(old => [...old, filters.categories[e.target.value]['value']])
			} else {
				setFiltered(prevState => [...prevState.filter(el => el !== filters.categories[e.target.value]['value'])])
			}
		}
	}

	return (
		<div className='bg-white'>
			<div>
				{/* Mobile filters dialog */}
				{/* The 'show' prop controls whether the children should be shown or hidden */}
				<ProductFiltersMobile />

				<main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
					<div className='flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6'>
						<h1 className='text-4xl font-bold tracking-tight text-gray-900'>Psst... the cookies are good.</h1>

						<div className='flex items-center'>
							<Menu as='div' className='relative inline-block text-left'>
								<div>
									<Menu.Button className='group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900'>
										Sort
										<ChevronDownIcon
											className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
											aria-hidden='true'
										/>
									</Menu.Button>
								</div>

								<Transition
									as={Fragment}
									enter='transition ease-out duration-100'
									enterFrom='transform opacity-0 scale-95'
									enterTo='transform opacity-100 scale-100'
									leave='transition ease-in duration-75'
									leaveFrom='transform opacity-100 scale-100'
									leaveTo='transform opacity-0 scale-95'
								>
									<Menu.Items className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
										<div className='py-1'>
											{sortOptions.map(option => (
												<Menu.Item key={option.name}>
													{({ active }) => (
														<a
															href={option.href}
															className={classNames(
																option.current ? 'font-medium text-gray-900' : 'text-gray-500',
																active ? 'bg-gray-100' : '',
																'block px-4 py-2 text-sm'
															)}
														>
															{option.name}
														</a>
													)}
												</Menu.Item>
											))}
										</div>
									</Menu.Items>
								</Transition>
							</Menu>

							<button type='button' className='-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7'>
								<span className='sr-only'>View grid</span>
								<Squares2X2Icon className='h-5 w-5' aria-hidden='true' />
							</button>
							<button
								type='button'
								className='-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
								onClick={() => setMobileFiltersOpen(true)}
							>
								<span className='sr-only'>Filters</span>
								<FunnelIcon className='h-5 w-5' aria-hidden='true' />
							</button>
						</div>
					</div>

					<section aria-labelledby='products-heading' className='pt-6 pb-24'>
						<h2 id='products-heading' className='sr-only'>
							Products
						</h2>
						{/*********************************************************************************/}
						<div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
							{/* Filters */}
							<form className='hidden lg:block'>
								<Disclosure as='div' className='border-b border-gray-200 py-6'>
									{({ open, close }) => (
										<>
											{open && windowSize.width < 960 && close()}
											<h3 className='-my-3 flow-root'>
												<Disclosure.Button className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
													{/* FILTER TYPE NAME */}
													<span className='font-medium text-gray-900'>Categories</span>
													<span className='ml-6 flex items-center'>
														{open ? (
															<MinusIcon className='h-5 w-5' aria-hidden='true' />
														) : (
															<PlusIcon className='h-5 w-5' aria-hidden='true' />
														)}
													</span>
												</Disclosure.Button>
											</h3>
											<Transition
												enter='transition duration-100 ease-out'
												enterFrom='transform scale-95 opacity-0'
												enterTo='transform scale-100 opacity-100'
												leave='transition duration-75 ease-out'
												leaveFrom='transform scale-100 opacity-100'
												leaveTo='transform scale-95 opacity-0'
											>
												<Disclosure.Panel className='pt-6'>
													<div className='space-y-4'>
														<div className='flex items-center'>
															{/* FILTER INPUT */}
															<input
																id={`filter-${2}-${2}`}
																name='sup'
																defaultValue={true}
																onChange={e => handleCheckbox(e)}
																type='checkbox'
																defaultChecked={true}
																className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
															/>
															<label htmlFor={`filter-${2}-${2}`} className='ml-3 text-sm text-gray-600'>
																'pies'
															</label>
														</div>
													</div>
												</Disclosure.Panel>
											</Transition>
										</>
									)}
								</Disclosure>
							</form>
							<ProductGrid />
						</div>
					</section>
				</main>
			</div>
		</div>
	)
}

export default AllProductsPage