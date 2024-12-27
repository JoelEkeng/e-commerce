import Header from '@/components/(Admin)/Header'
import { Typography, Button } from '@mui/joy'
import Image from 'next/image'
export default function Page() {
    return (
        <main className='container mx-auto'>
            <Header />
            {/* <section className='text-center h-[250px]'>
                <Typography level="h2">Efficiently manage your product with ease</Typography>    
            </section> */}

            <div className='gap-4 mt-12 border-b'>
                <Typography level="h2" className="text-center border-b-2 p-4">Product management at your fingertips</Typography>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center py-8'>
                    <div className='border-r'>
                        <Image src='/assets/images/Admin/Add.png' alt='Add product' width={300} height={300} />
                        <div>
                            <Typography level="h4">Add a new product</Typography>
                            <Typography level="body-sm">Enter product details, Categorize your product for easy access</Typography>
                        </div>
                    </div>

                    <div className='border-r'>
                        <Image src='/assets/images/Admin/Edit.png' alt='Edit product' width={300} height={30} />
                        <div>
                            <Typography level="h4">Update existing product</Typography>
                            <Typography level="body-sm">Receive notifications for successful actions. Keep track of changes.</Typography>
                        </div>
                    </div>

                    <div>
                        <Image src='/assets/images/Admin/Delete.png' alt='Delete product' width={300} height={300} />
                        <div>
                            <Typography level="h4">Delete Products</Typography>
                            <Typography level="body-sm">Review and confirm product changes. Stay updated on product status.</Typography>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-24'>
                <Typography level='h2' className="text-center border-t border-b p-4">Access our platform</Typography>
                <div className='grid grid-cols-2 gap-48 max-w-4xl mx-auto mt-8'>
                <div className='my-auto'>
                    <div>
                        <Typography level='h4'>Manage effortlessly!</Typography>
                        <Typography level='body-md'>Streamline product management with our Admin page. Organize and update inventories</Typography>
                    </div>
                <Button className='rounded-xl mt-8' color='neutral'>Access now</Button>
                </div>
                <div>
                    <Image src='/assets/images/Admin/Access.png' alt='Access' width={300} height={300} />
                </div>
                </div>
            </div>
        </main>
    )
}