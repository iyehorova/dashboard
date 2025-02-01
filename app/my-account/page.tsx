export default function MyAccountPage() {
  return (
    <main className="mx-[30px] mb-[30px] mt-[24px] flex-1">
      <div className="overflow-hidden shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6">My account</h3>
          <p className="text-grey mt-1 max-w-2xl text-sm">
            Details and informations about user.
          </p>
        </div>

        <div className="border-light-grey border-t">
          <dl>
            <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-grey text-sm font-medium">Full name</dt>
              <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">Full Name</dd>
            </div>

            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-grey text-sm font-medium">Position</dt>
              <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">Position</dd>
            </div>

            <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-grey text-sm font-medium">Email address</dt>
              <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
                email@example.com
              </dd>
            </div>

            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-grey text-sm font-medium">Salary</dt>
              <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">$00,000</dd>
            </div>

            <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-grey text-sm font-medium">About</dt>
              <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                doloremque cumque ea? Quo earum, temporibus deleniti dolorem,
                culpa hic eum maxime sequi et accusantium repellendus nemo amet
                fuga minus eligendi?
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
