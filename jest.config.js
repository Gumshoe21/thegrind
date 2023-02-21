// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */

const customJestConfig = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  // If you're using [Module Path Aliases](https://nextjs.org/docs/advanced-features/module-path-aliases),
  // you will have to add the moduleNameMapper in order for jest to resolve your absolute paths.
  // The paths have to be matching with the paths option within the compilerOptions in the tsconfig.json
  // For example:
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@models/(.*)$': '<rootDir>/src/models/$1',
    '^@ui/(.*)$': '<rootDir>/src/components/ui/$1',
    '^@home/(.*)$': '<rootDir>/src/components/Home/$1',
    '^@products/(.*)$': '<rootDir>/src/components/Products/$1',
    '^@profile/(.*)$': '<rootDir>/src/components/Profile/$1',
    '^@checkout/(.*)$': '<rootDir>/src/components/Checkout/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@actions/(.*)$': '<rootDir>/src/store/actions/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@imgs/(.*)$': '<rootDir>/public/img/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1',
    '^@slices/(.*)$': '<rootDir>/src/store/slices/$1',
    '^@store/(.*)$': '<rootDir>/src/store/index.ts',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
  },
  testEnvironment: 'node',
}
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
