export default function MyAccountPage() {
  return (
    <main className="mx-[30px] mb-[30px] mt-[24px] flex-1">
      <div className="overflow-hidden shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6">My account</h3>
          <p className="mt-1 max-w-2xl text-sm text-grey">
            Details and informations about user.
          </p>
        </div>

        <div className="border-t border-light-grey">
          <dl>
            <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-grey">Full name</dt>
              <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
                Mike Dawson
              </dd>
            </div>

            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-grey">Position</dt>
              <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">Developer</dd>
            </div>

            <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-grey">Email address</dt>
              <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
                mike-dawson@gmail.com
              </dd>
            </div>

            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-grey">Salary</dt>
              <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">$50,000</dd>
            </div>

            <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-grey">About</dt>
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
