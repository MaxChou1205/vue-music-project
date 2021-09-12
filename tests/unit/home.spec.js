import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home";
import SongItem from "@/components/SongItem";

jest.mock("@/includes/firebase", () => {});

describe("Home.vue", () => {
  test("renders list of songs", () => {
    const songs = [{}, {}, {}];

    Home.methods.getSongs = () => false;

    const component = shallowMount(Home, {
      data() {
        return {
          songs
        };
      }
    });

    const items = component.findAllComponents(SongItem);

    expect(items).toHaveLength(songs.length);

    items.forEach((wrapper, i) => {
      expect(wrapper.props().song).toStrictEqual(songs[i]);
    });
  });
});
