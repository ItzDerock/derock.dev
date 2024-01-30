import JobExpEntry from "~/components/JobExpEntry";

export default function Publications() {
  return (
    <section class="m-4 xl:m-24">
      <h2 class="text-white text-2xl my-4 text-center">
        {">"} Publications <span class="animate-pulse inline-block">📄</span>
      </h2>

      {/* vertical timeline style */}
      <div class="flex flex-row">
        <div class="grid grid-cols-4">
          <JobExpEntry
            href="https://ieeexplore.ieee.org/document/9773931"
            description={
              <>
                J. K. Debnath and D. Xie, "
                <a
                  href="https://ieeexplore.ieee.org/document/9773931"
                  class="text-blue-500 underline"
                  target="_blank"
                >
                  CVSS-based Vulnerability and Risk Assessment for High
                  Performance Computing Networks,
                </a>
                " The 16th IEEE International Systems Conference (SysCon),
                Montreal, QC, Canada, 2022, pp. 1-8, doi:
                10.1109/SysCon53536.2022.9773931.
              </>
            }
            type="first"
          />

          <JobExpEntry
            href="https://ieeexplore.ieee.org/document/9994017"
            description={
              <>
                J. Chu and D. Xie, "
                <a
                  href="https://ieeexplore.ieee.org/document/9994017"
                  target="_blank"
                  class="text-blue-500 underline"
                >
                  A Network-based Distributed Data Storage System for Data
                  Security in a Hostile Network,
                </a>
                " 2022 International Conference on Smart Applications,
                Communications and Networking (SmartNets), Palapye, Botswana,
                2022, pp. 1-8, doi: 10.1109/SmartNets55823.2022.9994017.
              </>
            }
            type="middle"
          />

          <JobExpEntry
            href="https://cdn.derock.dev/SysCon2024Paper.pdf"
            description={
              <>
                D. Xie, A. Kumar, “
                <a
                  href="https://cdn.derock.dev/SysCon2024Paper.pdf"
                  target="_blank"
                  class="text-blue-500 underline"
                >
                  Encblock: Enclave and Blockchain-enabled Secure Data Sharing
                  and Computing for Power Grids,
                </a>
                ” Accepted by the 17th IEEE International Systems Conference
                (SysCon), Montreal, QC, Canada, 2023.
              </>
            }
            type="last"
          />
        </div>
      </div>
    </section>
  );
}
